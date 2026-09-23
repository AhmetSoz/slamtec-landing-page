$ErrorActionPreference = 'Stop'
$pages = [ordered]@{
  'aurora-s' = 'https://www.slamtec.com/en/aurora-s'
  'aurora' = 'https://www.slamtec.com/en/aurora'
  'lpx-t1' = 'https://www.slamtec.com/en/t1'
  'slamkit' = 'https://www.slamtec.com/en/slamkit'
  'lpx-e3' = 'https://www.slamtec.com/en/e3'
  's2' = 'https://www.slamtec.com/en/s2'
  's3' = 'https://www.slamtec.com/en/s3'
  'a3' = 'https://www.slamtec.com/en/lidar/a3'
  'a2' = 'https://www.slamtec.com/en/lidar/a2'
  'a1' = 'https://www.slamtec.com/en/lidar/a1'
  'mapper' = 'https://www.slamtec.com/en/lidar/mapper'
}
$result = [ordered]@{}
foreach ($name in $pages.Keys) {
  try {
    $html = (Invoke-WebRequest -Uri $pages[$name] -TimeoutSec 40).Content
    $images = @([regex]::Matches($html, '<img\b[^>]*>', 'IgnoreCase, Singleline') | ForEach-Object {
      $tag = $_.Value
      $src = [regex]::Match($tag, '\bsrc="([^"]+)"', 'IgnoreCase').Groups[1].Value
      $alt = [regex]::Match($tag, '\balt="([^"]*)"', 'IgnoreCase').Groups[1].Value
      $width = [regex]::Match($tag, '\bwidth="([^"]+)"', 'IgnoreCase').Groups[1].Value
      $height = [regex]::Match($tag, '\bheight="([^"]+)"', 'IgnoreCase').Groups[1].Value
      if ($src -and ($src -match '^https://image\.slamtec\.com/' -or $src -match '^//image\.slamtec\.com/')) {
        if ($src.StartsWith('//')) { $src = 'https:' + $src }
        [ordered]@{ alt = [System.Net.WebUtility]::HtmlDecode($alt); url = $src; width = $width; height = $height }
      }
    })
    $result[$name] = @{ page = $pages[$name]; images = $images }
    Write-Output "$name $($images.Count) images"
  } catch {
    $result[$name] = @{ page = $pages[$name]; images = @(); error = $_.Exception.Message }
    Write-Warning "$name : $($_.Exception.Message)"
  }
}
$result | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $PSScriptRoot 'manufacturer-graphics.json') -Encoding utf8

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$source = Get-Content -LiteralPath (Join-Path $root 'app.js') -Raw
$products = [regex]::Matches($source, "id: '([^']+)'[\s\S]*?url: '(https://www\.robotsepeti\.com/[^']+)'", 'IgnoreCase')
$result = [ordered]@{}
foreach ($product in $products) {
  $id = $product.Groups[1].Value
  $url = $product.Groups[2].Value
  try {
    $html = (Invoke-WebRequest -Uri $url -TimeoutSec 30).Content
    $gallery = [regex]::Match($html, '<ul id="productImage"[\s\S]*?</ul>', 'IgnoreCase').Value
    $photos = [regex]::Matches($gallery, 'href="(https://www\.robotsepeti\.com/[^\"]+-B\.(?:jpg|webp|png))"', 'IgnoreCase') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
    $result[$id] = @{ product = $url; photos = @($photos) }
    Write-Output "$id $(@($photos).Count)"
  } catch {
    Write-Warning "$id : $($_.Exception.Message)"
    $result[$id] = @{ product = $url; photos = @() }
  }
}
$result | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $PSScriptRoot 'gallery-sources.json') -Encoding utf8

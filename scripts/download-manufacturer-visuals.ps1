$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$target = Join-Path $root 'assets/images/official'
New-Item -ItemType Directory -Path $target -Force | Out-Null
$items = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'manufacturer-visuals.json') -Raw | ConvertFrom-Json
$items | ForEach-Object -Parallel {
  $item = $_
  $destination = Join-Path $using:target $item.file
  if (-not (Test-Path -LiteralPath $destination)) {
    $headers = @{ Referer = 'https://www.slamtec.com/'; 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/132.0 Safari/537.36' }
    Invoke-WebRequest -Uri $item.url -Headers $headers -OutFile $destination -TimeoutSec 90
  }
  $size = (Get-Item -LiteralPath $destination).Length
  if ($size -lt 1000 -or $size -gt 25MB) { throw "Unexpected image size: $($item.file) $size" }
  "$($item.file) $([math]::Round($size / 1KB)) KB"
} -ThrottleLimit 6

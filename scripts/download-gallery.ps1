$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$gallery = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'gallery-sources.json') -Raw | ConvertFrom-Json -AsHashtable
foreach ($id in $gallery.Keys) {
  $photos = @($gallery[$id].photos)
  foreach ($index in 1..2) {
    if ($index -ge $photos.Count) { continue }
    $url = $photos[$index]
    $extension = [regex]::Match($url, '\.(jpg|webp|png)$', 'IgnoreCase').Groups[1].Value.ToLower()
    $destination = Join-Path $root "assets/images/$id-$($index+1).$extension"
    Invoke-WebRequest -Uri $url -OutFile $destination -TimeoutSec 30
    Write-Output "$id $($index+1) $extension"
  }
}

$ErrorActionPreference = 'Stop'
$base = [uri]'https://wiki.slamtec.com'
$page = Invoke-WebRequest -Uri 'https://wiki.slamtec.com/display/SD/Overseas%2BHelp%2BCenter' -UseBasicParsing -TimeoutSec 60
$folder = Join-Path $PSScriptRoot '..\assets\docs'
New-Item -ItemType Directory -Force -Path $folder | Out-Null

$documents = [ordered]@{
  'a1-datasheet.pdf' = 'datasheet_A1M8'
  'a1-manual.pdf' = 'usermaunal_A1M8'
  'a2m12-datasheet.pdf' = 'datasheet_A2M12'
  'a2-series-manual.pdf' = 'usermanual_A2%20series'
  'a3-datasheet.pdf' = 'datasheet_A3M1'
  'a3-manual.pdf' = 'usermanual_A3M1'
  's1-datasheet.pdf' = 'datasheet_S1'
  's1-manual.pdf' = 'usermanual_S1'
  's2-datasheet.pdf' = 'datasheet_S2_v'
  's2l-datasheet.pdf' = 'datasheet_S2L'
  's2e-datasheet.pdf' = 'datasheet_S2E'
  's2-series-manual.pdf' = 'usermanual_S2_v'
  's2e-manual.pdf' = 'usermanual_S2E'
  's3-datasheet.pdf' = 'datasheet_S3'
  's3-manual.pdf' = 'usermanual_S3'
  'm2m2-datasheet.pdf' = 'mapper_datasheet_M2M2'
  'm2m2-quickstart.pdf' = 'MAPPER_Kit_quickstart'
  't1-datasheet.pdf' = 'datasheet_T1M4'
  't1-manual.pdf' = 'usermanual_T1M4'
  'e3-datasheet.pdf' = 'LPX-E3-EN.pdf'
  'e3-manual.pdf' = 'LPX-E3P1_instruction_manual'
  'aurora-datasheet.pdf' = 'Aurora%20Datasheet'
  'aurora-manual.pdf' = 'Aurora%20Usermanual'
}

foreach ($doc in $documents.GetEnumerator()) {
  $link = $page.Links | Where-Object { $_.href -like "*$($doc.Value)*" } | Select-Object -First 1
  if (-not $link) { Write-Warning "Bağlantı bulunamadı: $($doc.Key)"; continue }
  $relative = [System.Net.WebUtility]::HtmlDecode($link.href)
  $url = [uri]::new($base, $relative)
  $destination = Join-Path $folder $doc.Key
  try {
    Invoke-WebRequest -Uri $url.AbsoluteUri -OutFile $destination -UseBasicParsing -TimeoutSec 60
    $stream = [System.IO.File]::OpenRead($destination)
    try { $signature = New-Object byte[] 4; [void]$stream.Read($signature, 0, 4) }
    finally { $stream.Dispose() }
    if ([System.Text.Encoding]::ASCII.GetString($signature) -ne '%PDF') {
      Remove-Item -LiteralPath $destination
      Write-Warning "PDF yanıtı alınamadı: $($doc.Key)"
      continue
    }
    Write-Output "$($doc.Key) $((Get-Item -LiteralPath $destination).Length)"
  } catch {
    if (Test-Path -LiteralPath $destination) { Remove-Item -LiteralPath $destination }
    Write-Warning "$($doc.Key): $($_.Exception.Message)"
  }
}

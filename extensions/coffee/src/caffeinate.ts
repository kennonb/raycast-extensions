import { showHUD } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function main() {
  try {
    await runAppleScript(`do shell script "pgrep caffeinate"`);
    await showHUD("Your Mac is already caffeinated");
  } catch (_) {
    runAppleScript('do shell script "caffeinate -di"');
    await showHUD("Your Mac is caffeinated");
  }
}
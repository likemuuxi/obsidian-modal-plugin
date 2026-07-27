// Bundled Dark Reader source for injection into webviews.
//
// This module is built separately as a self-contained IIFE and inlined into
// main.js as a string (see esbuild.config.mjs). It is executed in a webview's
// renderer context via `webContents.executeJavaScript(...)`, which attaches the
// Dark Reader API to `window.DarkReader`.
//
// IMPORTANT: No remote/CDN code is loaded at runtime. The Dark Reader source is
// bundled with the plugin (from the local `darkreader` npm dependency) so it can
// be reviewed and is not flagged by the Obsidian "no dynamic <script>" check.
import * as DarkReader from "darkreader";

(window as any).DarkReader = DarkReader;

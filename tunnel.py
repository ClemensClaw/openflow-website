#!/usr/bin/env python3
"""
Simple HTTP server + expose via SSH reverse tunnel
"""
import subprocess
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

os.chdir('/root/openflow-website')

# Start local server
print("🦞 Starting OpenFlow website on http://localhost:8765")
server = HTTPServer(('0.0.0.0', 8765), SimpleHTTPRequestHandler)

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("Shutting down...")
    server.shutdown()

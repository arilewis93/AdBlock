#!/bin/bash

# Path to the input text file containing URLs, one per line
input_file="$1"

# Path to the output PAC file
output_file="blocklist.pac"

# Start generating the PAC file content
pac_content="function FindProxyForURL(url, host) {
    var blocked_urls = [
"

# Read the input file line by line
while IFS= read -r url
do
    # Add the URL to the blocked_urls array in PAC file format
    pac_content+="        \"*$url*\",
"
done < "$input_file"

# Complete the PAC file content
pac_content+="    ];

    for (var i = 0; i < blocked_urls.length; i++) {
        if (shExpMatch(url, blocked_urls[i])) {
            return \"PROXY 127.0.0.1:8080\";
        }
    }

    return \"DIRECT\";
}"

# Write the PAC content to the output file
echo "$pac_content" > "$output_file"

echo "PAC file generated successfully!"

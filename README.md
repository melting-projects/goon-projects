# goon-projects
A place to host out ~~goon~~ content consumption QoL experiements.

All projects here were created for personal use. Im not really a programmer, but I'll sometimes get ideas and like to flesh em out a little. 
Everything will be provided as-is, but im always willing to humor feature suggestions!

Below is a list of the projects:

## Infini-Scroll
A single-file HTML project that sort of acts like twitter's infinite scroll, but for local content. I guess the idea is that if you have a folder of mixed-media (images, video, etc) it'll view and load them infinitely as you scroll. Its made to unload items once they're scrolled past to be less memory heavy. I tested it with a folder of 5k+ videos/images and it handled it well enough. 
Videos are muted by default but will automatically unmute once they're in view.

## FixUp-X-Links
A userscript that modifies the copied url when clicking Copy Link on twitter's share menu. It literally just replaces the "x.com/twitter.com" part with "fixupx.com" while keeping the status/id the same. I did this so I could share stuff from X to telegram/discord with better embeds. 
I tried going through the DOM to modify the links directly pre-copy, but it kept breaking every day or so. Currently it works by letting twitter copy the link how it wants, then just replaces the clipboard content with the fixed link. Kinda hacky and means you need to give the script permission to modify your clipboard, but it works.
To use it, just create a new script in violent/tampermonkey, and save it.
I use this one regularly, so if it breaks for some reason, it'll update it pretty fast.

## X-HQ-Images
Another userscript that just makes twit/X load the highest quality version of images by default. Im aware other extensions can do this, but I wanted a lighter version without all the stuff I didnt use.
May or may not work tbh. Seems to work on my machine but w/e.

More to come!
Suggestions welcomed!

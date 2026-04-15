# Payload & Astro Website Technical Test

Hi guys, thanks for giving this a wee read.

After catching up with Jack and Chris regarding the local setup for Payload, I focused on making the CMS structure as clean as possible for the end-user.

## CMS Structure

For the staff section, I created a Staff Members collection. I chose this approach to keep the data centralized; it makes it much easier for a content editor to manage staff details in one place rather than editing them directly inside a page block. This makes the content reusable across the site and keeps the interface intuitive for non-developers.

## Carousel Implementation

For the carousel, I decided to use a combination of vanilla JavaScript and CSS scroll snap. I went this route because it works natively in Astro without adding extra dependencies to the project. It’s a lightweight solution that handles mobile touch-scrolling well, which I felt was a good middle ground for a technical task of this scale.

## If I had more time

I prioritized the data structure and functionality. If I were taking this further, I would:

Integrate a library like Embla to handle more complex carousel behavior.
Build out the individual dynamic routes for the staff profile pages.
Refine the styling and add more robust error handling for missing content fields.
Allow the editor to remove staff members on a page specific level.
Add department level relationships and front end filtering for 'dev team', 'marketing team' etc.

Please let me know if you have any questions about my approach.

Thanks,
Calum

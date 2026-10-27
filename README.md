# Violets' Giving Circle Website

A simple, hand-written website: plain HTML, CSS, and a little JavaScript. There is no build step, no database, and no login system. What you see in these files is exactly what appears on the site.

**Hosting:** Vercel (free) &nbsp;|&nbsp; **Code:** GitHub (free) &nbsp;|&nbsp; **Domain:** violetsgivingcircle.org

---

## What's in this folder

```
index.html            Home page (photo carousel, mission, save-the-date)
who-we-are.html       Who We Are (board photo and names)
what-we-do.html       What We Do
grant-partners.html   Grant Partners
our-event.html        Our Event (next fundraising event)
past-events.html      Past Events
donate.html           Donate
contact.html          Contact Us
css/styles.css        All colors, fonts, and layout
js/main.js            Photo carousel and mobile menu
images/               Logos and photos
README.md             This guide
```

Each page is its own file. To change what a page says, open that file and edit the text between the tags.

---

## How to update the site (the easy way: ask an AI)

You do not need to know how to code. Open Claude (claude.ai) and upload the files you want changed (or this whole folder), then ask in plain English. Examples:

- "Update our-event.html with the new event: March 5, 2028 at [venue]. Keep the same style."
- "On who-we-are.html, replace the board names with this list: ..."
- "Add a new grant partner called [name] to grant-partners.html with this description: ..."
- "Change the purple color across the site to #7A5BB5."

Then replace the old file with the updated one (see "Publishing a change" below).

## Common yearly updates

| Task | File | What to do |
|------|------|-----------|
| New board and board photo | `who-we-are.html`, `images/board-photo.jpg` | Replace the photo (same file name) and edit the names in the caption |
| New event date | `index.html` (Save the Date section), `our-event.html` | Edit the date and details |
| New co-chairs | `who-we-are.html`, `images/people/` | Move last year's co-chairs into the Past Co-Chairs list (copy a `<div class="chair-year">` block to the top; each year shows its two co-chairs side by side with their quotes), then put the new co-chairs in "Meet Our Current Co-Chairs" and replace their photos |
| After an event: move it to Past Events | `past-events.html`, `images/past-events/` | Copy one `<article class="event">` block to the top of the list, then edit the title, text, judges, and photo file names (instructions are in a comment at the top of the list) |
| Fill in the next event | `our-event.html`, `index.html` | Edit the date and details. The menu label says "Our 2027 Event"; when the year changes, ask Claude to "rename the Our 2027 Event menu item to Our 2029 Event on every page" |
| Add a grant partner | `grant-partners.html`, `images/partners/` | Copy one `<a class="partner-card">` block into "Current Grant Partners", then change the link, name, and photo file name. When a partner is no longer current, move its card into the collapsed "Past Grant Partners" section |
| Instagram feed | `contact.html` | Already connected through a free Behold account (feed ID in the page). New posts appear by themselves; edit the look at behold.so. If the feed stops, check the Behold dashboard and that the Instagram account is still connected |
| Update the event page photo | `images/event-scene.jpg`, `our-event.html` | The wall-of-posters picture is one image file. To change the poster or photo, give Claude the new flyer or photo and ask it to rebuild `images/event-scene.jpg`. Only use photos you have the right to use. The date, time, and place under the picture are plain text in `our-event.html` |
| Change the Donate link | `donate.html` | Edit the `href` on the Donate button |
| Change homepage photos | `images/slide-1.jpg` to `slide-4.jpg` | Replace the files, keeping the same names |
| Change colors or fonts | `css/styles.css` | Edit the color and font values at the very top (fonts are Cormorant Garamond (bold) for headings and Montserrat for body; to swap them, change `--font-heading` and `--font-body` and the Google Fonts link in each page's `<head>`) |
| Change the total granted | `index.html`, `what-we-do.html` | Edit the "Over $500,000" line on the home page and the "over $500,000" sentence in step 6 (Grant Funds) on What We Do |

**Photo tips:** Use JPG files. For the homepage carousel, wide photos (16:9, about 1600 pixels wide) look best. Keep each photo under about 500 KB so the site loads quickly. Free tools like squoosh.app can shrink them.

**Sticky header:** the logo, name, and menu stay at the top as you scroll (and shrink a little). This is handled by the "Sticky header" block at the bottom of `css/styles.css` and the last block of `js/main.js`.

**Menu and footer:** The menu at the top and the footer appear in all 8 files. If you add, rename, or remove a page, update the menu in every file. (An AI can do this for you: "Add a new page called Press to the menu on every page.")

---

## Publishing a change

The site updates automatically whenever new files are pushed to GitHub.

1. Go to the project on github.com.
2. Open the file you want to change, click the pencil icon (Edit), make the change, and click **Commit changes**. To replace a photo, open the `images` folder and use **Add file → Upload files**.
3. Vercel notices the change and republishes within about a minute. No further steps are needed.

---

## First-time setup (one time only)

### 1. Put the code on GitHub
1. Create a free account at github.com (use a shared organization email, not a personal one, so the next board can get in).
2. Click **New repository**, name it `vgc-website`, and create it.
3. Click **uploading an existing file**, drag in everything in this folder (keep the `css`, `js`, and `images` folders), and click **Commit changes**.

### 2. Publish it on Vercel
1. Sign in to vercel.com (choose "Continue with GitHub").
2. Click **Add New → Project**, pick the `vgc-website` repo, and click **Deploy**. Leave all settings at their defaults. It will give you a temporary address like `vgc-website.vercel.app`. Check that it looks right.

### 3. Connect your domain
1. In Vercel, open the project, then **Settings → Domains**, and add `violetsgivingcircle.org` and `www.violetsgivingcircle.org`.
2. Vercel will show the DNS records to use. Go to wherever the domain is registered (this may be Squarespace Domains, if the domain was bought through them) and enter those records there. Vercel's page walks through it.
3. Allow up to a few hours for the change to spread. Do not cancel Squarespace until the new site is loading on your domain.

---

## Handoff checklist for the next person

Keep these in a shared, club-owned place (not one student's personal account):

- [ ] GitHub login (the account that owns the repo)
- [ ] Vercel login
- [ ] Domain registrar login (where the domain is renewed each year)
- [ ] The domain renewal date
- [ ] This README

If you inherit this and are not sure where to start: open Claude, upload the files, and say "I'm new to this website. Walk me through what I need to update."

---

## Items still to be finished (as of the first draft)

- **Before launch:** every page has a `<meta name="robots" content="noindex, nofollow">` line near the top that hides the draft from Google. Delete that line (and the comment above it) from all 8 pages when the site goes live. Ask an AI: "Remove the noindex robots tag from every HTML page."

Look for pink dashed boxes labeled **PLACEHOLDER** on the pages. Delete each box after filling in the real content.

- All photos have been added (home carousel, board, co-chairs, What We Do, past events, donate, and grant partners). To swap any photo later, upload a new JPG with the same file name; keep each under about 500 KB.
- `grant-partners.html`: confirm the name "Harvest Home" (the list said "Harvest House"; the website is harvesthomela.org).
- `our-event.html` is blank except for the save-the-date until the 2027 details are ready.
- `contact.html`: there is no contact form; people use the email address, phone, or mailing address.
- `who-we-are.html`: quotes are needed for Ria D. '26, Paloma V. '26, Channing B. '25, and Jade C. '25.

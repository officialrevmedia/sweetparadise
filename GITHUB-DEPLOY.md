# Deploying Sweet Paradise to GitHub Pages

A step-by-step guide to publish the site free on GitHub Pages. This is a static HTML site, so no build step is needed. Total time: about 10 minutes.

---

## Before You Start

- A GitHub account (free)
- The `sweet-paradise` folder unzipped on your computer
- The folder already includes a `.nojekyll` file. Leave it there. It tells GitHub Pages to skip Jekyll processing, which avoids the file-path and underscore issues that can break a plain HTML site.

---

## Option A: Upload Through the Browser (No Git Required)

The simplest path. Good if you just want it live.

### 1. Create the repository
1. Go to github.com and click the **+** in the top right, then **New repository**.
2. Repository name: `sweet-paradise` (or anything you like).
3. Set it to **Public** (GitHub Pages is free on public repos).
4. Do not add a README, .gitignore, or license (keep it empty).
5. Click **Create repository**.

### 2. Upload the files
1. On the empty repo page, click **uploading an existing file** (the link in the quick-setup box).
2. Open your `sweet-paradise` folder on your computer.
3. Select everything **inside** the folder (all the .html files, plus the `css`, `js`, and `assets` folders, and the `.nojekyll` file). Do not upload the outer `sweet-paradise` folder itself, just its contents.
4. Drag the selection into the GitHub upload area.
5. Wait for all files to finish uploading. The `css` and `js` folders must appear in the list.
6. Scroll down, leave the commit message as is, and click **Commit changes**.

> Tip: if the `.nojekyll` file is hidden on your Mac, press Cmd+Shift+. (period) in Finder to show hidden files before selecting.

### 3. Turn on GitHub Pages
1. In the repo, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, select **main** and folder **/ (root)**, then click **Save**.
5. Wait 1 to 3 minutes. Refresh the page.
6. GitHub shows a green box: "Your site is live at `https://YOUR-USERNAME.github.io/sweet-paradise/`".

That URL is your live site. Open it and the homepage loads with all images.

---

## Option B: Push With Git (Command Line)

Better if you plan to keep updating the site.

```bash
# 1. From inside the sweet-paradise folder
cd path/to/sweet-paradise

# 2. Initialize and commit
git init
git add .
git commit -m "Initial Sweet Paradise website"

# 3. Connect to your new empty GitHub repo
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sweet-paradise.git

# 4. Push
git push -u origin main
```

Then follow **Step 3** above (Settings, Pages, Deploy from branch, main, root, Save).

To update later:
```bash
git add .
git commit -m "Describe your change"
git push
```
The live site refreshes automatically in a minute or two.

---

## Verifying It Worked

Open `https://YOUR-USERNAME.github.io/sweet-paradise/` and check:
- [ ] Homepage loads with photos (Unsplash images appear)
- [ ] Navigation links work (click Cakes, Catering, etc.)
- [ ] CSS is applied (warm cream background, serif headings). If the page looks like plain unstyled text, the `css` folder did not upload correctly. Re-upload it.
- [ ] Mobile bottom bar appears on a phone
- [ ] "Open now" status badges show on the homepage and Locations page

---

## Common Issues

**Page loads but has no styling (plain text).**
The `css/main.css` file did not upload, or uploaded to the wrong place. The structure on GitHub must be:
```
sweet-paradise/
├── index.html
├── css/main.css
├── js/main.js
└── ...
```
Confirm `css` and `js` are folders in the repo root, not loose files or nested deeper.

**Links give a 404.**
Filenames are case-sensitive on GitHub Pages. `Cakes.html` will not match a link to `cakes.html`. All files here use lowercase, so keep them lowercase.

**Images do not load.**
These pull from Unsplash over the network, so they need an internet connection. If you later swap in your own photos, place them in the `assets` folder and update the `src` paths in the HTML.

**Changes do not show up.**
GitHub Pages caches. Hard-refresh with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows), or wait a couple of minutes.

---

## Using a Custom Domain (sweetparadise.ca)

Once the GitHub Pages URL works, you can point the real domain at it.

1. In the repo: **Settings, Pages, Custom domain**, enter `www.sweetparadise.ca`, click **Save**.
2. GitHub creates a `CNAME` file in the repo. Leave it.
3. At your domain registrar (where sweetparadise.ca is managed), add these DNS records:
   - A **CNAME** record: host `www`, value `YOUR-USERNAME.github.io`
   - Four **A** records for the root domain, host `@`, pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. Back in **Settings, Pages**, tick **Enforce HTTPS** once it becomes available (can take up to a day for the certificate).
5. DNS changes can take a few minutes to 24 hours to propagate.

> Note: GitHub Pages does not process the contact and inquiry forms. The forms use Netlify Forms attributes, which only work on Netlify. On GitHub Pages the forms will display but not send. If form submissions matter, either host on Netlify instead, or wire the forms to a service like Formspree (swap the form action to your Formspree endpoint). See section 7.4 of the main documentation.

---

## Quick Reference

| Item | Value |
|---|---|
| Site type | Static HTML, no build step |
| Jekyll | Disabled via `.nojekyll` |
| Default live URL | `https://YOUR-USERNAME.github.io/REPO-NAME/` |
| Custom domain | Add via Settings, Pages, then set DNS |
| Forms | Not functional on GitHub Pages (use Netlify or Formspree) |
| Update method | Re-upload files, or `git push` |

---

*Prepared by revmedia. Questions: info@revmedia.ca*


## Important: Upload the assets folder

This build now includes an `assets/img/` folder with the real photography. When uploading, make sure `assets/` is uploaded alongside `index.html`, `css/`, and `js/`. If photos do not appear on the live site, the `assets` folder did not upload. To replace a photo later, drop a new file with the same name into `assets/img/`.

The **Order Online** buttons link to your order.online storefront and open in a new tab. They work immediately on the live site, no setup needed.

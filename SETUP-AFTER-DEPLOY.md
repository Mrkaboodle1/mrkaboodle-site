# What's left to do after deploy

Quick checklist of things that need real-world account setup before the site is fully operational.

## 1. Wire booking form emails (5 minutes — Rhett to do)

The form is built and deployed. Right now if someone fills it in, the enquiry is logged but **no email reaches your inbox**.

### Steps

1. Go to [resend.com/signup](https://resend.com/signup)
2. Sign up with your `rhett@mrkaboodle.com.au` (or any email)
3. Verify your email
4. **Domains tab → Add Domain → enter `mrkaboodle.com.au`** — this lets you send "from" your own domain. Resend will give you a few DNS records to add at CrazyDomains. (Only needed for the `from` address. Skip and use the default `onboarding@resend.dev` for testing first.)
5. **API Keys tab → Create API Key**, name it `mr-kaboodle-site`, scope = Send emails. Copy the key (starts with `re_`).
6. **Vercel → mrkaboodle-site project → Settings → Environment Variables**:
   - `RESEND_API_KEY` = the key you just copied
   - `BOOKING_TO_EMAIL` = `rhett@mrkaboodle.com.au` (or wherever you want enquiries to land)
   - (optional) `BOOKING_FROM_EMAIL` = `Mr Kaboodle Site <bookings@mrkaboodle.com.au>` — only after domain verified, otherwise omit
7. **Deployments tab → latest deployment → Redeploy** so the new env vars take effect.

### Test

Visit `mrkaboodle-site.vercel.app/book`, fill in the form. You should get an email at the address you set.

## 2. Point your domain (15 minutes — together with Rhett)

Right now `mrkaboodle.com.au` still points to your WordPress hosting at CrazyDomains. To switch it to Vercel:

1. **Vercel → mrkaboodle-site → Settings → Domains → Add Domain → `mrkaboodle.com.au`**. Vercel will show two records to add (an A record and a CNAME for `www`).
2. **CrazyDomains → Login → My Account → Domain Names → mrkaboodle.com.au → Manage DNS**.
3. Update the records as Vercel instructs. Usually:
   - `@` (root) A record → `76.76.21.21`
   - `www` CNAME → `cname.vercel-dns.com`
4. Wait 10 minutes to a few hours for DNS to propagate. Vercel will email you when it's verified and SSL is issued.
5. Once verified, the WordPress site stops being served on the domain — the new Next.js site takes over.

**⚠️ Before doing this**: make sure the booking form (#1) is wired up first. We don't want leads landing in a black hole the moment the domain switches.

## 3. Old-URL redirects (already in code)

The code already includes 301 redirects from old WordPress URLs to the new equivalents. See `next.config.ts`. No action needed — they take effect on first deploy after this commit lands.

## 4. Update GitHub repo settings (optional, 2 min — Rhett)

- Go to [github.com/Mrkaboodle1/mrkaboodle-site/settings](https://github.com/Mrkaboodle1/mrkaboodle-site/settings)
- Add a description: `Mr Kaboodle Entertainment - Gold Coast kids party entertainment website`
- Add the live URL: `https://mrkaboodle.com.au` (after step 2)
- Add topics: `nextjs`, `tailwindcss`, `vercel`, `mr-kaboodle`

## 5. Vercel commercial-use upgrade (when you launch publicly)

Vercel's free Hobby plan is for non-commercial use only. Once `mrkaboodle.com.au` is live and earning, you'll want to either:

- Upgrade to Vercel Pro ($30 AUD/month/user), or
- Migrate to **Cloudflare Pages** (free for commercial use, similar performance) — happy to do this swap any time, takes about 30 minutes.

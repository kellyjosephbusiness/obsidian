# Page topology — bluevine.com/business-loans/line-of-credit (1440)

All sections are flow content inside `main`; the header is sticky. Container 1320px (`px-15` gutters → 1290 content). Fonts: Gellix 600 headings, Domaine 400 body (FundLine substitutes F37 Bolton / Geist). Palette: navy text #020553, blue #1943DC, light-blue tint #D7E7FF, periwinkle #B8B6FF, grey band #F5F6FA, dark navy band #020553.

| # | Section | Rect | Interaction |
|---|---|---|---|
| 1 | Hero: H1 80/80 two lines + 24/36 sub with footnote superscripts + CTA (blue 20px, 16×66 padding, 5px radius) + BBB & Trustpilot badges + 12px disclosure; right: 600×600 tinted image block with a 45% top-left radius | 0–800, bg #D7E7FF, padding 120/0/80 | static |
| 2 | Stat band: "$17B+" 72px + "working capital delivered" 24px; right 24px blurb | 800–1020, bg #F5F6FA, 220 tall | static |
| 3 | Features: centered H2 72/72 (two lines) + 24/36 sub; 3 tinted cards 410×573, padding 40, centered icon illustration ~200×240, H3 32/32, body 20/30 | 1140–2017 | icon has `transition: transform .2s` (hover scale) |
| 4 | Callout: 1290×256 box, 5px periwinkle border, bottom-right radius 90, icon 148×116 + H2 36 + 20/30 body with bold lead + outline button | 2137–2393 | static |
| 5 | Steps: H2 72 + left 520×684 app mock (SVG) on a periwinkle circle, right 3 rows: 55px numbered circle icon + H3 32 + 20/30 body, 16px row padding | 2513–3349 | static |
| 6 | Support: H2 60/60 + 20/30 body + inline blue link; right 500×500 image with 90% top radii | 3510–4010 | static |
| 7 | Reviews: H2 72; left 300×233 tinted rating card (bottom-right radius 90): "Excellent" 20, stars 180×29 + "4.7", "Based on 11,488 reviews" 13px, Trustpilot logo; right Swiper: 310×233 white cards (1px light-blue border, top-right radius 90, padding 24): stars, title 20, excerpt 14, author 13; prev/next 12px arrows + 880×10 scrollbar with blue drag | 4170–4555 | click-driven carousel (Swiper, horizontal, scrollbar drag) |
| 8 | FAQ: H2 60 + 12 accordion rows 92px tall, 24/32 Gellix 600 titles, 1px light-blue dividers, "+" icon right | 4675–5908 | click accordion, single open |
| 9 | Two CTA cards 630×411: tint #D7E7FF with bottom-right radius 200, and periwinkle #B8B6FF with top-right radius 200; icon 55, H2 40/40, body 24/36, blue button 44px | 6028–6439 | static |
| 10 | Guides: dark navy band padding 120; H2 72 white + 24 sub; 3 white cards 410×540: 195px periwinkle header with icon, body padding 24/24/64, tag 14 semibold blue, H3 32/35, body 20/30, "Read more" 16 semibold at bottom | 6559–7550 | hover: card link |
| 11 | Closing band: bg #1943DC padding 120; H2 60 white (two lines) + white button 60px + 20/30 note | 7550–7956 | static |

Mobile (390): everything stacks to one column; hero image below copy; stat band stacks; feature cards full width; callout stacks icon/text/button; steps show the mock above the list; reviews rating card above the carousel (1 card visible); FAQ rows 20px titles; CTA cards stack; guides stack; closing band stacks.

FundLine mapping: same order and proportions, our tokens (page #f6f6f6, cards white/#dde4f6/#c5d1f0, navy #1e3a8a, dark #191919, rails #e1e1e1, radius 24px, F37 Bolton headings via --h1/--h2, Geist body, Material Symbols icons, PressableButton CTAs, InitialsAvatar/stars drawn with icons). The Trustpilot/BBB marks are replaced by FundLine's own rating figures (fictional).

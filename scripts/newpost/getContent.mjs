export default function({ title="New Post Template", isHebTitle = false, date = new Date()}) {
    return `---
title: "${title}"
isHebTitle: ${isHebTitle}
coverImage: "../../assets/new-roccbox/new-roccbox-img1.jpeg"
description: תיאור תיאור תיאור להוסיף
publishDate: "${date}"
---

import "../../styles/post-page.css";
import { Image } from "astro:assets";
import image from "../../assets/new-roccbox/new-roccbox-cover.jpg";

## מרכיבים

- מרכיבים מאוד מאוד טובים
- מרכיבים

## הכנה

<Image src={image} alt="sample-image" class="post-page-image" />

### פרמנטוליזה

### ערבוב

### תפיחה

### עיצוב

### אפיה
`
}
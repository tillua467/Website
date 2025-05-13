# How to Add a New Device

This file explains how to add a new device entry into the device list.

The device list looks like this:

```json
[
  {
    "name": "POCO X2 | Redmi K30",
    "codename": "phoenix",
    "search-name": [
      "POCO X2",
      "Redmi K30",
      "phoenix",
      "Xiaomi POCO X2"
    ],
    "image": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x2.jpg",
    "maintainer": {
      "name": "tillua467",
      "link": "https://github.com/tillua467"
    },
    "download": "downloads/poco-x2.zip"
  }
]
```

---

## Steps to Add a New Device

1. **Copy an Existing Device Block**  
   Copy an entire device block from `{` to `}` including all fields.

2. **Paste After the Last Device**  
   Place a comma `,` after the previous device block if it’s not the last item.  
   Then paste your new block below.

3. **Fill in the Details**  
   Update the fields:
   
   - `name`: Write the full device name (example: "Redmi Note 8").
   - `codename`: Write the device codename (example: "ginkgo").
   - `search-name`:  
     Add an array `[]` of names that users might search for.
   - `image`:  
     Add a URL link to the device's image (preferably from gsmarena or an official source).
   - `maintainer`:  
     Add your name and your GitHub (or other) profile link.
   - `download`:  
     **Admins** will provide the correct download path or link.

4. **Example: New Device Block**

```json
{
  "name": "Redmi Note 8",
  "codename": "ginkgo",
  "search-name": [
    "Redmi Note 8",
    "ginkgo",
    "Xiaomi Redmi Note 8"
  ],
  "image": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-8.jpg",
  "maintainer": {
    "name": "newmaintainer",
    "link": "https://github.com/newmaintainer"
  },
  "download": "downloads/redmi-note-8.zip"
}
```

> **Important:**  
> Make sure the JSON structure is valid!  
> Use an online [JSON Validator](https://jsonlint.com/) if you’re unsure.

---

## Quick Checklist

- [ ] Added all necessary fields (`name`, `codename`, etc.).
- [ ] Added a comma `,` after the previous device (if not the last item).
- [ ] Maintainers also need to add the "Search Name" to let the website work.
- [ ] Download Link will be provided by the Admins.
- [ ] Confirmed that the JSON is valid.
- [ ] Tested the image URL.

---

Done! 🎉
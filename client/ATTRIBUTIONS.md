This Figma Make file includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

This Figma Make file includes photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).

## Medina Page Images
The Medina page dynamically loads representative photos via the Unsplash Source API.

- Landmarks and resources images: sourced from `https://source.unsplash.com/featured` queries such as `?prophets-mosque,medina`, `?quba-mosque,medina`, `?uhud-mountain,medina`, `?wadi,dates,saudi-arabia`, and thematic queries like `?technology,education,smart-city`, `?mining,gold-mine,industry`.
- Dates image: `https://images.unsplash.com/photo-1576201836101-08a06a60c3f6` (Unsplash). Usage follows Unsplash guidelines; images are fetched dynamically and may vary.

These images are hot-linked and not redistributed. If you prefer hosting static assets, replace the URLs with files under `client/public/` and update this section with specific authors and licenses.
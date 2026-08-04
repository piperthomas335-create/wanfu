# 撮影写真の置き場

実地撮影した店内・外観の写真をこのディレクトリに置きます。

## 手順

1. このディレクトリに写真をアップロードする（ファイル名は元のままでよい）
2. `scripts/optimize_photos.py` で縮小・EXIF 除去をかける

   ```bash
   python3 scripts/optimize_photos.py public/images/photos --out public/images/photos
   ```

3. 出力された雛形を `lib/gallery-data.ts` の `shopPhotos` に反映する

## 掲載前に確認が要るもの

- 第三者の肖像や著作物が写り込んだ写真（ポスター、サイン色紙など）
- 一般のお客様の顔が識別できる写真

いずれも権利者の許諾を得てから配置してください。一度コミットすると
git の履歴からは消えません。

このファイルは写真を配置したあと削除して構いません。

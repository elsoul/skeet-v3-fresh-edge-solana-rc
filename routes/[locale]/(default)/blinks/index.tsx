import { define } from '@/utils/state.ts'
import { asset } from 'fresh/runtime'
import { page } from 'fresh'
import CTARow from '@/routes/[locale]/(default)/(_rows)/CTARow.tsx'
import ProductsSlideRow from '@/islands/rows/products/ProductsSlideRow.tsx'
import NewsIndexRow from '@/islands/rows/news/NewsIndexRow.tsx'
import BlinksHeroRow from '@/routes/[locale]/(default)/blinks/(_rows)/BlinksHeroRow.tsx'

export const handler = define.handlers({
  GET(ctx) {
    ctx.state.title = 'blinks.title'
    ctx.state.description = 'blinks.description'
    ctx.state.ogImage = new URL(asset('/ogp.jpg'), ctx.url).href
    return page()
  },
})

export default define.page<typeof handler>(function BlinksPage(props) {
  return (
    <>
      <BlinksHeroRow state={props.state} />
      <CTARow state={props.state} />
      <ProductsSlideRow />
      <NewsIndexRow defaultShowCounts={3} />
    </>
  )
})

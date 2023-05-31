import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className='title'>ABOUT PAGE</h1>
      </div>

      <div className='description'>
        <p>lalallalala</p>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>

  )
}
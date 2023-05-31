import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
        <div>
            <h1>CONTACT Page</h1>
          Ir al <Link href="/">HOME</Link>
          </div>
    </MainLayout>
  )
}

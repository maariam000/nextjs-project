import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/EventItem.module.css'

const EventItem = ({item}) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image src={item.image ? item.image : '/images/event-default.png'} width={170} height={100} />
      </div>
      <div className={styles.info}>
        <span>{item.date} at {item.time}</span>
        <h3>{item.name}</h3>
      </div>
      <div className={styles.link}>
      <Link href={`/events/${item.slug}`} className="btn">Details</Link>
      </div>
    </div>
  )
}

export default EventItem

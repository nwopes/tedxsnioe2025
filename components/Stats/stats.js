import './stats.scss'
import { motion } from 'framer-motion';
export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: .7 }}
    >
      <div className='StatsContainer'>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>650+</p>
          <p className='StatsContainer__card--text'>Attendees</p>
        </div>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>650+</p>
          <p className='StatsContainer__card--text'>Attendees</p>
        </div>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>650+</p>
          <p className='StatsContainer__card--text'>Attendees</p>
        </div>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>650+</p>
          <p className='StatsContainer__card--text'>Attendees</p>
        </div>
      </div>
    </motion.div>
  )
}
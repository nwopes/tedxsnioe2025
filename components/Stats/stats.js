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
          <p className='StatsContainer__card--number'>10+</p>
          <p style={{ color: "#10125C" }} className='StatsContainer__card--text'>Speakers</p>
        </div>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>15+</p>
          <p style={{ color: "#A51100" }} className='StatsContainer__card--text'>Goodies</p>
        </div>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>100+</p>
          <p style={{ color: "#F2810B" }} className='StatsContainer__card--text'>Attendees</p>
        </div>
        <div className='StatsContainer__card'>
          <p className='StatsContainer__card--number'>∞</p>
          <p style={{ color: "#2A6543" }} className='StatsContainer__card--text'>Experience</p>
        </div>
      </div>
    </motion.div>
  )
}
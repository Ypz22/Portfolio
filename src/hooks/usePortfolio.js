import { useContext } from 'react'
import PortfolioContext from '../context/portfolioContext'

const usePortfolio = () => {
  const context = useContext(PortfolioContext)

  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }

  return context
}

export default usePortfolio

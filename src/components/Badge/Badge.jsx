import PropTypes from "prop-types"
import badgeStyles from "./Badge.module.css"

const Badge = ({ children }) => {
  return <span className={badgeStyles.Badge}>{children}</span>
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Badge

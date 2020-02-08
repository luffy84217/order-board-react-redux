import FILTER_TYPE from '../constants/filterType';
import React from 'react';
import PropTypes from 'prop-types';
import intl from '../i18n/index';

const OrderBoardFooter = props => {
    const clearCompletedBtn = props.completedCount ?
        <button className="clear-completed" onClick={props.clearCompleted}>
            {intl[props.lang].clearCompleted}
        </button> : null;
    
    return (
        <footer className="footer">
            <span className="order-count">{props.orderCount} {intl[props.lang].left}</span>
            <ul className="filters">
                <li>
                    <a href="#/"
                        className={props.showStatus === FILTER_TYPE.SHOW_ALL ? "selected" : ""}
                        onClick={props.setShowStatus.bind(null, FILTER_TYPE.SHOW_ALL)}
                    >{intl[props.lang].all}</a>
                </li><li>
                    <a href="#/active"
                        className={props.showStatus === FILTER_TYPE.SHOW_ACTIVE ? "selected" : ""}
                        onClick={props.setShowStatus.bind(null, FILTER_TYPE.SHOW_ACTIVE)}
                    >{intl[props.lang].active}</a>
                </li><li>
                    <a href="#/completed"
                        className={props.showStatus === FILTER_TYPE.SHOW_COMPLETED ? "selected" : ""}
                        onClick={props.setShowStatus.bind(null, FILTER_TYPE.SHOW_COMPLETED)}
                    >{intl[props.lang].completed}</a>
                </li>
            </ul>
            {clearCompletedBtn}
        </footer>
    );
};

OrderBoardFooter.propTypes = {
    showStatus: PropTypes.string.isRequired,
    completedCount: PropTypes.number.isRequired,
    orderCount: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    setShowStatus: PropTypes.func.isRequired
};

export default OrderBoardFooter;
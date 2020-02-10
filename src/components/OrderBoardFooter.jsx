import FILTER_TYPE from '../constants/filterType';
import React from 'react';
import PropTypes from 'prop-types';
import intl from '../i18n/index';

const OrderBoardFooter = ({
    showStatus,
    orderCount,
    completedCount,
    lang,
    clearCompleted,
    setShowStatus
}) => {
    const clearCompletedBtn = completedCount ?
        <button className="clear-completed" onClick={clearCompleted}>
            {intl[lang].clearCompleted}
        </button> : null;
    
    return (
        <footer className="footer">
            <span className="order-count">{orderCount} {intl[lang].left}</span>
            <ul className="filters">
                <li>
                    <a href="#/"
                        className={showStatus === FILTER_TYPE.SHOW_ALL ? "selected" : ""}
                        onClick={setShowStatus.bind(null, FILTER_TYPE.SHOW_ALL)}
                    >{intl[lang].all}</a>
                </li><li>
                    <a href="#/active"
                        className={showStatus === FILTER_TYPE.SHOW_ACTIVE ? "selected" : ""}
                        onClick={setShowStatus.bind(null, FILTER_TYPE.SHOW_ACTIVE)}
                    >{intl[lang].active}</a>
                </li><li>
                    <a href="#/completed"
                        className={showStatus === FILTER_TYPE.SHOW_COMPLETED ? "selected" : ""}
                        onClick={setShowStatus.bind(null, FILTER_TYPE.SHOW_COMPLETED)}
                    >{intl[lang].completed}</a>
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
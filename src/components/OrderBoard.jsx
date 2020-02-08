import React from 'react';
import OrderItem from './OrderItem';
import OrderBoardFooter from './OrderBoardFooter';
import langs from '../constants/lang';
import intl from '../i18n/index';

const OrderBoardApp = (props) => {
    const orderList = props.orders.map(t =>
        <OrderItem
            key={t.id}
            order={t}
            toggle={props.handleToggleClick}
            edit={props.handleEditDBClick}
            editing={props.handleEditingKeyDown}
            blur={props.handleEditingBlur}
            destroy={props.handleDestroyClick}
        />
    );
    const langList = langs.map(lang =>
        <option key={lang.value} value={lang.value}>{lang.name}</option>    
    );

    return (
        <div>
            <header className="header">
                <h1>{intl[props.lang].title}</h1>
                <input
                    className="new-order"
                    placeholder={intl[props.lang].namePlaceholder}
                    onKeyDown={props.handleAddOrderKeyDown}
                />
                <input
                    className="new-order"
                    placeholder={intl[props.lang].pricePlaceholder}
                    onKeyDown={props.handleAddOrderKeyDown}
                />
                <input
                    className="new-order"
                    placeholder={intl[props.lang].descPlaceholder}
                    onKeyDown={props.handleAddOrderKeyDown}
                />
            </header>
            <section className="main">
                <input
                    className="toggle-all"
                    type="checkbox"
                    onClick={props.handleToggleAllOrderClick} />
                <ul className="order-list">
                    {orderList}
                </ul>
            </section>
            <OrderBoardFooter
                setShowStatus={props.handleShowClick}
                showStatus={props.visibilityFilter}
                orderCount={props.orderCount}
                completedCount={props.completedCount}
                clearCompleted={props.handleClearCompletedClick}
                lang={props.lang}
            />
            <select
                name="lang"
                className="lang"
                onChange={props.handleLangChange}
                defaultValue={props.lang}
            >
                {langList}
            </select>
        </div>
    );
};

export default OrderBoardApp;
import React from 'react';
import OrderItem from './OrderItem';
import OrderBoardFooter from './OrderBoardFooter';
import langs from '../constants/lang';
import intl from '../i18n/index';

const OrderBoardApp = ({
    orders,
    lang,
    visibilityFilter,
    orderCount,
    completedCount,
    handleToggleClick,
    handleEditDBClick,
    handleEditingKeyDown,
    handleEditingBlur,
    handleDestroyClick,
    handleAddOrderKeyDown,
    handleToggleAllOrderClick,
    handleShowClick,
    handleClearCompletedClick,
    handleLangChange
}) => {
    const orderList = orders.map(t =>
        <OrderItem
            key={t.id}
            order={t}
            toggle={handleToggleClick}
            edit={handleEditDBClick}
            editing={handleEditingKeyDown}
            blur={handleEditingBlur}
            destroy={handleDestroyClick}
        />
    );
    const langList = langs.map(lang =>
        <option key={lang.value} value={lang.value}>{lang.name}</option>    
    );

    return (
        <div>
            <header className="header">
                <h1>{intl[lang].title}</h1>
                <input
                    className="new-order"
                    placeholder={intl[lang].namePlaceholder}
                    onKeyDown={handleAddOrderKeyDown}
                />
                <input
                    className="new-order"
                    placeholder={intl[lang].pricePlaceholder}
                    onKeyDown={handleAddOrderKeyDown}
                />
                <input
                    className="new-order"
                    placeholder={intl[lang].descPlaceholder}
                    onKeyDown={handleAddOrderKeyDown}
                />
            </header>
            <section className="main">
                <input
                    className="toggle-all"
                    type="checkbox"
                    onClick={handleToggleAllOrderClick} />
                <ul className="order-list">
                    {orderList}
                </ul>
            </section>
            <OrderBoardFooter
                setShowStatus={handleShowClick}
                showStatus={visibilityFilter}
                orderCount={orderCount}
                completedCount={completedCount}
                clearCompleted={handleClearCompletedClick}
                lang={lang}
            />
            <select
                name="lang"
                className="lang"
                onChange={handleLangChange}
                defaultValue={lang}
            >
                {langList}
            </select>
        </div>
    );
};

export default OrderBoardApp;
import React from 'react';
import PropTypes from 'prop-types';

const OrderItem = ({
    order,
    toggle,
    edit,
    editing,
    blur,
    destroy
}) => {
    return (
        <li className={order.completed ? "completed" : ""}>
            <input className="toggle"
                    type="checkbox"
                    checked={order.completed ? true : false}
                    onClick={toggle.bind(null, order.id)}
            />
            <div className="view">
                <label onDoubleClick={edit}>{order.name}</label>
                <button className="destroy" onClick={destroy.bind(null, order.id)} />
            </div>
            <input
                className="edit"
                onKeyDown={editing.bind(this, order.id, 'name')}
                onBlur={blur}
            />
            <div className="view">
                <label onDoubleClick={edit}>{order.price}</label>
                <button className="destroy" onClick={destroy.bind(null, order.id)} />
            </div>
            <input
                className="edit"
                onKeyDown={editing.bind(this, order.id, 'price')}
                onBlur={blur}
            />
            <div className="view">
                <label onDoubleClick={edit}>{order.desc}</label>
                <button className="destroy" onClick={destroy.bind(null, order.id)} />
            </div>
            <input
                className="edit"
                onKeyDown={editing.bind(this, order.id, 'desc')}
                onBlur={blur}
            />
        </li>
    );
};

OrderItem.propTypes = {
    order: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        desc: PropTypes.string,
        completed: PropTypes.bool.isRequired
    }),
    toggle: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    editing: PropTypes.func.isRequired,
    blur: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired
};

export default OrderItem;
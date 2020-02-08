import React from 'react';
import PropTypes from 'prop-types';

const OrderItem = props => {
    return (
        <li className={props.order.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle"
                        type="checkbox"
                        checked={props.order.completed ? true : false}
                        onClick={props.toggle.bind(null, props.order.id)}
                />
                <label onDoubleClick={props.edit}>{props.order.name}</label>
                <button className="destroy" onClick={props.destroy.bind(null, props.order.id)} />
            </div>
            <input
                className="edit"
                onKeyDown={props.editing.bind(this, props.order.id, 'name')}
                onBlur={props.blur}
            />
            <div className="view">
                <input className="toggle"
                        type="checkbox"
                        checked={props.order.completed ? true : false}
                        onClick={props.toggle.bind(null, props.order.id)}
                />
                <label onDoubleClick={props.edit}>{props.order.price}</label>
                <button className="destroy" onClick={props.destroy.bind(null, props.order.id)} />
            </div>
            <input
                className="edit"
                onKeyDown={props.editing.bind(this, props.order.id, 'price')}
                onBlur={props.blur}
            />
            <div className="view">
                <input className="toggle"
                        type="checkbox"
                        checked={props.order.completed ? true : false}
                        onClick={props.toggle.bind(null, props.order.id)}
                />
                <label onDoubleClick={props.edit}>{props.order.desc}</label>
                <button className="destroy" onClick={props.destroy.bind(null, props.order.id)} />
            </div>
            <input
                className="edit"
                onKeyDown={props.editing.bind(this, props.order.id, 'desc')}
                onBlur={props.blur}
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
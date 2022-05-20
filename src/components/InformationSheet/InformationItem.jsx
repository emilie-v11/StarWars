import React from 'react';
import PropTypes from 'prop-types';

/**
 * InformationItem Component contain the data information to one info details for one person by ID
 * @property {String} categorie - Information categorie
 * @property {String} info - information
 */

const InformationItem = ({ categorie, info }) => {
    return (
        <li className="p-2 ps-0">
            <span className="fw-bold pe-2">{categorie} :</span>
            {info}
        </li>
    );
};

InformationItem.propTypes = {
    categorie: PropTypes.string,
    info: PropTypes.string,
};

export default InformationItem;

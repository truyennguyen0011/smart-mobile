import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating(props) {
    if (props.value >= 0 && props.value < 0.5) {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
        )
    } else
        if (props.value >= 0.5 &&props.value < 1.5) {
            return (
                <div>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            )
        } else if (props.value >= 1.5 && props.value < 2.5) {
            return (
                <div>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            )
        } else if (props.value >= 2.5 && props.value < 3.5) {
            return (
                <div>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            )
        } else if (props.value >= 3.5 && props.value < 4.5) {
            return (
                <div>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            )
        } else if (props.value >= 4.5) {
            return (
                <div>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                </div>
            )
        }
}
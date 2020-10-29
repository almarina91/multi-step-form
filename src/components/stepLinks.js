import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from './context';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default function StepLinks() {
    const { profile, social } = useSignupForm();
    const isProfileDone = !isEmpty(profile);
    const isSocialDone = !isEmpty(social);

    return (
        <nav className="navigationLinks">
            <ul>
                <li>
                    <NavLink to="/home" exact>
                        Profile <span />
                    </NavLink>
                </li>

            {isProfileDone ? (
                <li>
                    <NavLink to="/social">
                        Social <span />
                    </NavLink>
                </li>
            ) : (
                <li>
                    <a>
                        Social <span />
                    </a>
                </li>
            )}

            {isProfileDone && isSocialDone ? (
                <li>
                    <NavLink to="/review" >
                        Review <span />
                    </NavLink>
                </li>
            ) : (
                <li>
                    <a>
                        Review <span />
                    </a>
                </li>
            )}
            </ul>
        </nav>
    );
}

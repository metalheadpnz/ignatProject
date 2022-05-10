import React from 'react';
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";

const CommonComponents = () => {
    return (
        <div>

            <div>
                <SuperInputText/>
            </div>

            <div>
                <SuperButton children={'button'}/>
            </div>

            <div>
                <SuperCheckbox/>
            </div>

        </div>
    );
};

export default CommonComponents;
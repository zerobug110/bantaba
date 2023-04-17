import React,{ FC } from 'react';
import './app-dialog.scss';

export const AppDialog:FC = () => {
    return(
        <div className="overlaye">
            <div className="modal">
                <div className="modal__header">
                    header
                </div>
                <div className="modal__body">
                    body
                </div>
                <div className="madal__footer">
                    footer
                </div>
            </div>
        </div>       
    )
}
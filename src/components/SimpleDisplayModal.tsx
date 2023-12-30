import { ISimpleModal } from '../model/components.tsx';

export const SimpleModal = ({ content }: ISimpleModal) => {
    return (
        <div
            style={{
                marginTop: '10%',
                marginLeft: '25%',
                width: '50%',
                backgroundColor: '#EEEEEE',
            }}
        >
            <p style={{ padding: 30 }}> {content} </p>
        </div>
    );
};

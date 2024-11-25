import PropTypes, { func } from 'prop-types';

export function Member(){}
function TypeProp(props){
    return <p>결과는 콘솔에서 확인하기 바란다</p>;
}

TypeProp.protoTypes={
    //Member형 프로퍼티
    prop1: PropTypes.instanceOf(Member),
};

export default TypeProp;
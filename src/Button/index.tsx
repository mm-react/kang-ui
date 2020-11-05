import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './index.less';
const types = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  default: 'default',
  primary: 'primary',
  info: 'info',
};
const sizes = {
  small: 'small',
  default: 'default',
  large: 'large',
};
const Button = ({
  prefixCls = 'kang-ui-button',
  type = 'default',
  size = 'default',
  block = false,
  children = '按钮文字',
  styles = {},
  disabled = false,
  dashed = false,
  onClick = () => {},
  hollow = false,
  loading = false,
  className = '',

  ...attr
}) => {
  const isDisabled = disabled ? { disabled: true } : { onClick };
  return (
    <div className={cls(prefixCls, { [`${prefixCls}-block`]: block })}>
      <button
        type="button"
        {...isDisabled}
        className={cls(
          `${prefixCls}-btn`,
          className,
          `${prefixCls}-btn-${type}`,
          {
            'btn-hollow': hollow,
            'btn-disabled': disabled,
            'btn-block': block,
            'btn-dashed': dashed,
            // 'btn-loading': loading,
            [`btn-size-${size}`]: size !== sizes.default,
            // ['btn-circle']: circle,
          },
        )}
        {...attr}
      >
        {/* {!circle && loading && (
          <LoadingIcon className={`${prefixCls}-loading`} />
        )} */}
        <span>{children}</span>
      </button>
    </div>
  );
};
Button.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.oneOf(Object.values(types)),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  dashed: PropTypes.bool,
  loading: PropTypes.bool,
  hollow: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(sizes)),
};
export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from '@leafygreen-ui/emotion';
import { Variant, variantColors } from '@leafygreen-ui/syntax';
import { darken } from 'polished';

export const windowChromeHeight = 28;

const windowChromeStyle = css`
  height: ${windowChromeHeight}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const windowControlsStyle = css`
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  height: 12px;
  margin: auto;
  display: flex;
`;

function WindowControl({ color }: { color: string }) {
  return (
    <div
      className={css`
        height: 12px;
        width: 12px;
        border-radius: 50px;
        margin-right: 8px;
        background-color: ${color};
        border: 1px solid ${darken(0.03, color)};
      `}
    />
  );
}

interface WindowChromeProps {
  variant?: Variant;
  chromeTitle?: string;
}

function WindowChrome({
  variant = Variant.Light,
  chromeTitle = '',
}: WindowChromeProps) {
  const colors = variantColors[variant];

  return (
    <div
      className={cx(
        windowChromeStyle,
        css`
          background-color: ${colors[1]};
          color: ${colors[2]};
        `,
      )}
    >
      <div className={windowControlsStyle}>
        {['#FF5952', '#E7BF2A', '#54C22C'].map(color => (
          <WindowControl key={color} color={color} />
        ))}
      </div>

      {chromeTitle}
    </div>
  );
}

WindowChrome.displayName = 'WindowChrome';

WindowChrome.propTypes = {
  variant: PropTypes.oneOf(Object.values(Variant)),
  chromeTitle: PropTypes.string,
};

export default WindowChrome;
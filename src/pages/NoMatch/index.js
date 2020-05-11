import React from "react";
import { Grid, Cell } from "react-mdl";


function NoMatch() {
  return (
    <div>
      <Grid>
        <Cell col={12}>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Cell>
      </Grid>
    </div>
  );
}

export default NoMatch;
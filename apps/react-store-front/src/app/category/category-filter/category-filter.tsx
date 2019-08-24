import React from 'react';
import ColorPicker from '../../shared/color-picker/color-picker';
import RangeSlider from '../../shared/range-slider/range-slider';
import Button from '../../shared/button/button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/styles';
import './category-filter.scss';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '5px 0px'
  }
});

/* eslint-disable-next-line */
export interface CategoryFilterProps {
  range?: number[];
}

export const CategoryFilter = (props: CategoryFilterProps) => {
  const classes = useStyles('CategoryFilterProps');
  const [range, setRange] = React.useState([30, 70]);
  const handleRangeChange = (event: any, newValue: number[]) => {
    setRange(newValue);
  };
  return (
    <div className="shadow filter flex flex-col">
      <div className="border p-4">
        <span className="font-semibold">Filter 486 Items</span>
        <ul>
          <li className="flex">
            <img
              className="cursor-pointer my-auto"
              src="/assets/icon/icons-close-small-black.png"
              alt=""
              style={{ height: '20px' }}
            />
            <span className="my-auto text-gray-500 text-sm">Gender: </span>
            <span className="my-auto ml-1">Woman</span>
          </li>
          <li className="flex">
            <img
              className="cursor-pointer my-auto"
              src="/assets/icon/icons-close-small-black.png"
              alt=""
              style={{ height: '20px' }}
            />
            <span className="my-auto text-gray-500 text-sm">Category: </span>
            <span className="my-auto ml-1">Dresses</span>
          </li>
        </ul>
      </div>
      <div className="bg-white flex-1">
        <div className="flex flex-col p-4 pb-0">
          <span className="font-bold bg-label">Color</span>
          <ColorPicker />
        </div>
        <div className="flex flex-col p-4 pb-0">
          <span className="font-bold bg-label">Sizes</span>
          <div className="size-button-container">
            <Button variant="contained" color="primary">
              XS
            </Button>
            <Button variant="contained">S</Button>
            <Button variant="contained">M</Button>
            <Button variant="contained">L</Button>
            <Button variant="contained">XL</Button>
          </div>
        </div>
        <div className="flex flex-col p-4  pb-0">
          <span className="font-bold bg-label">Price</span>
          <div className="flex flex-col">
            <RangeSlider
              value={range}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              getAriaValueText={(value) => `$${value}`}
            />
            <div className="flex bg-label">
              <span className="mr-auto">$1</span>
              <span>$10</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4  pb-0">
          <span className="font-bold bg-label">Brand</span>
          <div className="overflow-y-auto" style={{ maxHeight: '100px' }}>
            <FormGroup aria-label="position">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="End"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="End"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="End"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="End"
                labelPlacement="end"
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="border flex justify-around p-4">
        <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.root}
        >
          Apply
        </Fab>
        <button className="flex primary px-2 rounded-l-full rounded-r-full pr-3">
          <img
            className="my-auto"
            src="/assets/icon/icons-close-small-red.png"
            alt=""
          />
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;

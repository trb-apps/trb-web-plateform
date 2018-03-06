
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const SvgSchoolTemplate = (props) => {
    let styles = props.styles
    let text = props.text
    return (
            <g id="g4229"  fill={props.color || "black"}>
                  <path id="path4181"  fill={props.color || "black"} d="M 332.81339,349.34274 C 332.22509,347.00999 329.85142,345.58272 327.52379,346.17102 325.18082,346.75421 323.75866,349.12276 324.34185,351.46574 L 328.71062,368.92549 C 329.20684,370.91037 330.98198,372.23021 332.93616,372.23021 333.28914,372.23021 333.64724,372.1944 334.00022,372.10232 336.33808,371.51402 337.76535,369.15058 337.17705,366.80249 z M 376.59836,193.25361 C 374.18376,193.25361 372.22957,195.20779 372.22957,197.61727 L 372.22957,199.05733 319.84518,220.61729 319.84518,212.72945 378.26607,188.55232 C 379.89796,187.88216 380.96202,186.28608 380.96202,184.52117 380.96202,182.75115 379.89796,181.1653 378.27118,180.48491 L 251.66873,128.10052 C 250.59956,127.65955 249.40249,127.65955 248.33332,128.10052 L 121.73598,180.48491 C 120.10306,181.1653 119.03798,182.75115 119.03798,184.52117 119.03798,186.29119 120.10306,187.88216 121.73598,188.55232 L 248.33332,240.93671 C 248.86535,241.1618 249.43319,241.26923 250.00103,241.26923 250.56886,241.26923 251.1367,241.1618 251.66873,240.93671 L 297.44369,221.99852 C 299.67412,221.08282 300.73306,218.52499 299.81224,216.29456 298.89142,214.06925 296.33359,213.01542 294.10828,213.93624 L 250.00103,232.18381 134.82186,184.52117 250.00103,136.85956 365.18019,184.52117 315.06203,205.26007 267.05665,187.33479 C 267.31243,186.42932 267.46079,185.49315 267.46079,184.52117 267.46079,177.1802 259.79241,171.42507 250.00103,171.42507 240.20965,171.42507 232.54127,177.1802 232.54127,184.52117 232.54127,191.86215 240.20965,197.61727 250.00103,197.61727 254.3698,197.61727 258.26794,196.42532 261.29641,194.50695 L 311.11786,213.1075 311.11786,320.65409 C 306.04823,322.46299 302.38542,327.26149 302.38542,332.94499 302.38542,340.1683 308.26332,346.04109 315.48152,346.04109 322.69972,346.04109 328.57762,340.1683 328.57762,332.94499 328.57762,327.26149 324.9148,322.46811 319.84518,320.65205 L 319.84518,295.87638 C 332.37855,286.41803 336.87011,273.81815 337.06962,273.26054 337.22309,272.80013 337.31005,272.31926 337.31005,271.83327 L 337.31005,241.27486 C 337.31005,238.86282 335.35587,236.90864 332.94128,236.90864 330.52668,236.90864 328.57762,238.86282 328.57762,241.27741 L 328.57762,271.025 C 327.8205,272.87687 325.20128,278.58083 319.84518,284.21318 L 319.84518,230.06388 378.26095,206.02589 C 379.89796,205.35062 380.96202,203.75453 380.96202,201.98451 L 380.96202,197.62085 C 380.96202,195.21137 379.01295,193.25719 376.59836,193.25719 z M 250.00103,188.88483 C 244.6705,188.88483 241.26859,186.30142 241.26859,184.52117 241.26859,182.74092 244.6705,180.15751 250.00103,180.15751 255.33155,180.15751 258.73346,182.74092 258.73346,184.52117 258.73346,186.30142 255.33155,188.88483 250.00103,188.88483 z M 315.48152,337.31069 C 313.07204,337.31069 311.11786,335.3514 311.11786,332.94192 311.11786,330.53756 313.07204,328.57826 315.48152,328.57826 317.891,328.57826 319.84518,330.53756 319.84518,332.94192 319.84518,335.34628 317.891,337.31069 315.48152,337.31069 z M 315.48152,350.40679 C 313.06693,350.40679 311.11786,352.36098 311.11786,354.77045 L 311.11786,367.86604 C 311.11786,370.27603 313.06693,372.23021 315.48152,372.23021 317.89611,372.23021 319.84518,370.27603 319.84518,367.86655 L 319.84518,354.76994 C 319.84518,352.36098 317.89611,350.40679 315.48152,350.40679 z M 301.93013,303.45523 C 300.86607,301.29642 298.25708,300.40118 296.08804,301.47547 287.79555,305.57312 273.94745,310.34092 254.36469,310.99061 L 254.36469,271.82816 C 254.36469,269.42072 252.4105,267.46143 250.00103,267.46143 247.59155,267.46143 245.63736,269.42072 245.63736,271.8302 L 245.63736,310.9507 C 191.43179,309.22059 173.94134,276.38826 171.42443,270.91961 L 171.42443,241.27076 C 171.42443,238.85975 169.46923,236.90557 167.05975,236.90557 164.65027,236.90557 162.69455,238.85975 162.69455,241.26923 L 162.69455,271.82816 C 162.69455,272.38269 162.79943,272.93007 163.00456,273.45187 163.76424,275.34466 182.34126,319.84582 250.00154,319.84582 273.65125,319.84582 290.22088,314.11116 299.95599,309.30244 302.11992,308.22815 303.00493,305.61404 301.93064,303.45523 z M 250.00103,258.7341 C 250.56886,258.7341 251.1367,258.62156 251.66873,258.40159 L 299.68947,238.52723 C 301.91478,237.60641 302.96861,235.0537 302.04779,232.82838 301.12697,230.59795 298.56402,229.54924 296.34382,230.45983 L 250.00103,249.64357 127.77248,199.065 127.77248,197.61676 C 127.77248,195.20779 125.81676,193.25361 123.40727,193.25361 120.99779,193.25361 119.04156,195.20779 119.04156,197.61727 L 119.04156,201.98196 C 119.04156,203.75095 120.10665,205.34192 121.73957,206.01719 L 248.3369,258.40159 C 248.86893,258.62156 249.43677,258.7341 250.00461,258.7341 z M 303.43925,346.17102 C 301.10139,345.57761 298.73284,347.00999 298.14965,349.34274 L 293.78599,366.80249 C 293.19769,369.15058 294.62496,371.51402 296.96282,372.10232 297.3158,372.1944 297.67389,372.23021 298.02687,372.23021 299.98106,372.23021 301.75619,370.91037 302.25241,368.92549 L 306.62119,351.46574 C 307.20437,349.12276 305.78222,346.75421 303.43925,346.17102 z"/>
               </g>
    );
}
SvgSchoolTemplate.propTypes = {
};

export default SvgSchoolTemplate
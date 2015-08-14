
# translates a text file containing raw themopile readings with one timestamp and a text file
# containing actual temperatures with another timestamp to a .mat file containing resampled actual
# temperatures and resampled raw temperatures at the same timestamp

import numpy as np
from matplotlib import pyplot as plt
import scipy.io
from scipy.optimize import *
import sys
import epdb as pdb

# Usage: python processtemps_async.py TMP.csv TMC.csv TMC_column_number outfile.mat

THERMOPILE_PATH = sys.argv[1]
THERMOCOUPLE_PATH = sys.argv[2]
TEMP_COLUMN = int(sys.argv[3])
OUT_PATH = sys.argv[4]


def get_thermopile():  
    with open(THERMOPILE_PATH, 'r') as raw:
        raw_times = []
        raw_voltages = []
        raw_temps = []
        raw_estimates=[]
        for line in raw:
            vals = line.split(',')
            raw_times.append(float(vals[0]))
            raw_voltages.append(float(vals[2]))
            raw_temps.append(float(vals[3]))
            raw_estimates.append(float(vals[1]))
    return raw_times, raw_voltages, raw_temps, raw_estimates

def get_thermocouple():
    with open(THERMOCOUPLE_PATH, 'r') as actual:
        actual_times = []
        actual_temps = []
        for line in actual:
            vals = line.split(',')
            actual_times.append(float(vals[0]))
            actual_temps.append(float(vals[TEMP_COLUMN]))
    return actual_times, actual_temps


def main():

    raw_times, raw_voltages, raw_temps, raw_estimates = get_thermopile()
    actual_times, actual_temps = get_thermocouple()

    # Set a common time origin
    actual_times = np.array(actual_times)
    raw_times = np.array(raw_times)

    start_time = max((min(actual_times), min(raw_times)))
    print start_time
    end_time = min((max(actual_times), max(raw_times)))
    print end_time

    # create a new timescale at 2 second increments
    new_times = np.arange(start_time, end_time, 2)

    # resample using linear interpolation
    new_actual_temps = np.interp(new_times, actual_times, actual_temps)
    new_raw_voltages = np.interp(new_times, raw_times, raw_voltages)
    new_raw_temps = np.interp(new_times, raw_times, raw_temps)
    new_estimates = np.interp(new_times, raw_times, raw_estimates)

    out_dict = {}
    out_dict['resin'] = new_actual_temps
    out_dict['raw_voltage'] = new_raw_voltages
    out_dict['raw_temp'] = new_raw_temps
    out_dict['estimate_temp'] = new_estimates

    scipy.io.savemat(OUT_PATH, out_dict)
    #plt.plot(new_actual_temps, label = "Thermocouple")
    plt.plot(new_estimates)
    plt.xlabel('Time (sec)')
    plt.ylabel('temperature (C)')
    plt.show()


if __name__ == '__main__':
    main()

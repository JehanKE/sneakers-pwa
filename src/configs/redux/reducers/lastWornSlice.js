import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastWorn: {
        "DC3637-500": null,
        "CT2405-700": null,
        "CD4365-600": null,
        "DO9161-107": null,
        "HQ4540": null,
        "CT1973-800": null,
        "553558-075": null,
        "DV0794-001": null,
        "DH6927-017": null,
        "MS1211-ROYAL": null,
        "DV1191-400": null,
        "DV6208-600": null,
        "387686-01": null,
        "DZ5485-031": null,
        "DZ5485-612": null,
        "DX8733-001": null,
        "CW2190-300": null,
        "DR5415-103": null,
        "FN3727-100": null,
        "FV4921-600": null,
        "396524-01": null,
        "FD9711-602": null
    }
};

export const lastWornSlice = createSlice({
  name: "lastWorn",
  initialState,
  reducers: {
    updateLastWorn: (state, action) => {
      const { sneakerToUpdate, date } = action.payload;
      state.lastWorn[sneakerToUpdate] = date;
    }
  },
});

export const {
    updateLastWorn
} = lastWornSlice.actions;

export default lastWornSlice.reducer;

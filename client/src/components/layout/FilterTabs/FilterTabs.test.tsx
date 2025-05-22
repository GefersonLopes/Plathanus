/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";

jest.mock("../../../store/vehicleStore", () => ({
  useVehicleStore: jest.fn(),
}));
jest.mock("../../../hooks/useFilterForm", () => ({
  useFilterForm: jest.fn(),
}));

jest.mock("../../ui/Button", () => (props: any) => <button {...props} />);
jest.mock("../../ui/Radio", () => (props: any) => (
  <label>
    <input type="radio" {...props} />
    {props.label}
  </label>
));
jest.mock("../../ui/SearchInput", () => (props: any) => (
  <input type="search" {...props} />
));
jest.mock("../Title", () => (props: any) => <div>{props.title}</div>);

describe("FilterTabs component", () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders heading, radios, search input and button", () => {});

  it("calls setType and setFilter on mount via useEffect", () => {});

  it("submits form by calling handleSubmit", () => {});

  it("shows error message when formState.errors.search is set", () => {});
});

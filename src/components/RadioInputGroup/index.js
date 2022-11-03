import "./RadioInputGroup.css";
import { useState } from "react";
const EXPORT_NOW = "export_now";
const SCHEDULED = "scheduled";

function RadioInputGroup() {
    const [isScheduled, setIsScheduled] = useState(SCHEDULED);

    return (
        <div className="radio-wrapper">
            <div className="radio-container">
                <input
                    type="radio"
                    id="export_now"
                    name="settings"
                    value={EXPORT_NOW}
                    checked={isScheduled === EXPORT_NOW}
                    onChange={(e) => setIsScheduled(e.target.value)}
                />
                <label htmlFor="export_now">Export now</label>
            </div>

            <div className="radio-container">
                <input
                    type="radio"
                    id="scheduled"
                    name="settings"
                    value={SCHEDULED}
                    checked={isScheduled === SCHEDULED}
                    onChange={(e) => setIsScheduled(e.target.value)}
                />
                <label htmlFor="scheduled">Scheduled</label>
            </div>
            {isScheduled === SCHEDULED && (
                <div className="schedule-container">
                    <div className="schedule-wrapper">
                        <div className="field-container">
                            <label htmlFor="recurrence">Recurrence</label>
                            <select name="recurrence" id="recurrence">
                                <option>Weekly</option>
                            </select>
                        </div>
                        <div className="field-container">
                            <label htmlFor="on">On</label>
                            <select name="on" id="on">
                                <option>Monday</option>
                                <option>Thuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                                <option>Saturday</option>
                                <option>Sunday</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RadioInputGroup;

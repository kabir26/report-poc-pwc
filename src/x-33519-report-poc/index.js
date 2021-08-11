import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';



const view = (state, { updateState, dispatch }) => {
	const { dataColumns, dataRows } = state;
	

	return (
		<div className="report">
			<div className="header">
				<img className="header-logo" src="data:image/png;base64,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"></img>
				<span className="header-text">Risk &amp; Control Self Assessment - Risk Assessable Unit Progress Details</span>
				<button className="header-button">continued </button>
			</div>

			<div className="condition">
				<div className="condition-row">
					<div className="condition-col">
						<div className="condition-field-title">
							RR Reduced With Non-efective Controls
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							High or Moderate RRR w/ Non-Efective Controls
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							Risks Requinng KRI
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							Risks Requiring Corective Action
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							High IRR Without A Key Contol
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							Risk Treatment Reauired
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
				</div>
				<div className="condition-row">
					<div className="condition-col">

						<div className="condition-field-title">
							Risk Count
						</div>
						<div className="condition-field">
							<input className="condition-field-input" type="text" value="10,77"></input>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							RCSA Execution Block
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							BG/EF
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							LOB
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">
						<div className="condition-field-title">
							RAU Name
						</div>
						<div className="condition-field">
							<select className="condition-field-select" >
								<option value="volvo">(All))</option>
							</select>
						</div>
					</div>
					<div className="condition-col">

					</div>
				</div>
			</div>

			<div className="rea-table">
				<table>
					<caption>Variance in L3 Risk Event Types across Similar RAUs-Commercial Banking Disbursement Services</caption>
					<thead>
						<tr>
							{dataColumns.map((col) => {
								return (
									<th>
										{col}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{dataRows.map((item) => {
					

							let rowspans = [...Array(Math.max(...item.row.map(r => r.length)))].map((k, i) => i)
						

							return (rowspans.map(rs => {
								return (
									<tr>
										{rs == 0 && rowspans.length > 1 ? (
											<td rowspan={rowspans.length} className="key-highlight">
												{item.key}
											</td>
										) : (
											<td className={rs==0?'key-highlight':''}>
												{item.key}
											</td>
										)
										}

										{
											item.row.map((r) => {
												return (
													<td>
														{r.length > 0 ? (
															r[rs]['risk_event_type.risk_event_type_level_3']
														) : (
															''
														)
														}
													</td>
												)
											})
										}
									</tr>
								);
							})

							)
						})}
					</tbody>
				</table>

			</div>

		</div>
	);
};

import { createHttpEffect } from '@servicenow/ui-effect-http';
import { actionTypes } from '@servicenow/ui-core';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;


createCustomElement('x-418244-report-poc', {
	renderer: { type: snabbdom },
	view,
	styles,
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { dispatch } = coeffects;
			const query = '';

			dispatch('FETCH_REA_DATA', {
				sysparm_query: query,
				sysparm_fields: 'risk_event_type.risk_event_type_level_2,risk_event_type.risk_event_type_level_3,risk_assessable_unit.rau_name'
			});
		},
		'FETCH_REA_DATA': createHttpEffect('api/now/table/x_418244_rcsa_risk_event_aggregate', {
			method: 'GET',
			queryParams: [
				'sysparm_fields',
				'sysparm_query',
			],
			successActionType: 'FETCH_RAE_DATA_SUCCEEDED'
		}),
		'FETCH_RAE_DATA_SUCCEEDED': (coeffects) => {
			const { action, updateState } = coeffects;
			const { result } = action.payload;
			console.log('FETCH_RAE_DATA_SUCCEEDED', result)

			let keys = result.map((row) => {
				return row['risk_event_type.risk_event_type_level_2']
			})

			keys = keys.filter((item, index, self) => self.indexOf(item) == index)
	

			let colummns = result.map((row) => {
				return row['risk_assessable_unit.rau_name']
			})

			colummns = colummns.filter((item, index, self) => self.indexOf(item) == index && item != '' && item != null)

			let rows = keys.map((key, ki) => {
				let row = colummns.map((col) => {
					let cross = result.filter((r) => {
						return r['risk_assessable_unit.rau_name'] == col && r['risk_event_type.risk_event_type_level_2'] == key
					})
					
					return [...cross]
				})

				

				return { key: key, row: row }
			})


			

			colummns = ['L2 Risk Event Type', ...colummns]

			updateState({ dataColumns: colummns, dataRows: rows })
		},
	},
	initialState: {
		dataColumns: [],
		dataRows: []
	},
	properties: {},
});

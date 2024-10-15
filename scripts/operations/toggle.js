export function toggleButtons(isStorageAvailable) {
  const btnGroupList = document.getElementById("btn_group_list");
  const btnGroupClean = document.getElementById("btn_group_clean");
  const btnGroupSeeStatistics = document.getElementById(
    "btn_group_see_statistics"
  );

  btnGroupList.disabled = isStorageAvailable;
  btnGroupClean.hidden = !isStorageAvailable;
  btnGroupSeeStatistics.hidden = !isStorageAvailable;
}

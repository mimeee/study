#include <iostream>
#include <string>
#include <vector>

using namespace std;

template<class T>
int length(T &arr)
{
	return sizeof(arr) / sizeof(arr[0]);
}
template<class T>
void MergeSort(T &arr, int left, int right);
template<class T>
void Merge(T &arr, int left, int middle, int right);
template<class T>
void startMerge(T &arr);

//小和问题求解merge
template<class T>
void startAddMergeSort(T &arr, int left, int right, int &sums);

template<class T>
void SmallAddMerge(T &arr, int left, int middle, int right, int &sums);

//逆序对
template<class T>
void starts(T &arr);
template<class T>
void printDoubleNum(T &arr, int left, int right);
template<class T>
void printGo(T &arr, int left, int middle, int right);
int _main();

int _main() {
	int arr[] = {1,3,4,2,5};

	//startMerge(arr);
	starts(arr);
	for (int i = 0; i < length(arr); i++) {
		cout << arr[i] << endl;
	}
	
	return 0;
}

template<class T>
void startMerge(T &arr) {
	int l = 0;
	int r = length(arr) - 1;

	int sum = 0;
	startAddMergeSort(arr, l, r, sum);
	cout << sum << endl;
	//MergeSort(arr, l, r);
	/*for (int i = 0; i < r + 1; i++) {
		cout << arr[i] << endl;
	}*/
}

template<class T>
void MergeSort(T &arr,int left,int right) {
	if (left == right) return;

	int middle = left + ((right - left)>>1);
	MergeSort(arr, left, middle);
	MergeSort(arr, middle+1, right);
	Merge(arr, left, middle, right);
}

template<class T>
void Merge(T &arr, int left, int middle, int right) {
	const int len = right - left + 1;
	vector<int> ars(len);
	int leftPoint = left;
	int rightPoint = middle + 1;
	int k = 0;

	
	while (leftPoint <= middle && rightPoint <= right) {
		if (arr[leftPoint] <= arr[rightPoint]) {
			ars[k++] = arr[leftPoint++];
		}
		else if (arr[leftPoint] > arr[rightPoint]) {
			ars[k++] = arr[rightPoint++];
		}
	}
	while (leftPoint <= middle) {		
		   ars[k++] = arr[leftPoint++];
	}
	while (rightPoint <= right) {
		ars[k++] = arr[rightPoint++];
	}


	for (int i = 0; i < ars.size(); i++) {
		arr[i + left] = ars[i];
	}
}



//小和问题求解
template<class T>
void startAddMergeSort(T &arr, int left, int right, int &sums) {
	if (left == right) return;

	int middle = left + ((right - left) >> 1);
	startAddMergeSort(arr, left, middle, sums);
	startAddMergeSort(arr, middle + 1, right, sums);
	SmallAddMerge(arr, left, middle, right, sums);
}

template<class T>
void SmallAddMerge(T &arr, int left, int middle, int right,int &sums) {
	int leftPoint = left;
	int rightPoint = middle + 1;
	const int len = right - left + 1;
	vector<int> help(len);
	int k = 0;
	while (leftPoint <= middle && rightPoint <= right) {
		sums += arr[leftPoint] < arr[rightPoint] ? (right - rightPoint + 1)*arr[leftPoint] : 0;
		help[k++] = arr[leftPoint] < arr[rightPoint] ? arr[leftPoint++] : arr[rightPoint++];
	}

	while (leftPoint <= middle) {
		help[k++] = arr[leftPoint++];
	}
	while (rightPoint <= right) {
		help[k++] = arr[rightPoint++];
	}

	for (int i = 0; i < help.size(); i++) {
		arr[i + left] = help[i];
	}
}


//逆序对

template<class T>
void starts(T &arr) {
	int l = 0;
	int r = length(arr) - 1;
	printDoubleNum(arr, l, r);

}
template<class T>
void printDoubleNum(T &arr, int left, int right) {
	if (left == right) return;

	int middle = left + ((right - left) >> 1);
	printDoubleNum(arr, left, middle);
	printDoubleNum(arr, middle + 1, right);
	printGo(arr, left, middle, right);
}

template<class T>
void printGo(T &arr, int left, int middle, int right) {
	int leftPoint = left;
	int rightPoint = middle + 1;
	const int len = right - left + 1;
	vector<int> help(len);
	int k = 0;
	while (leftPoint <= middle && rightPoint <= right) {
		if (arr[leftPoint] > arr[rightPoint]) {
			for (int i = rightPoint; i <= right; i++) {
				cout << arr[leftPoint]<<"-"<< arr[i] << endl;
			}
		}
		help[k++] = arr[leftPoint] > arr[rightPoint] ? arr[leftPoint++] : arr[rightPoint++];
	}

	while (leftPoint <= middle) {
		help[k++] = arr[leftPoint++];
	}
	while (rightPoint <= right) {
		help[k++] = arr[rightPoint++];
	}

	for (int i = 0; i < help.size(); i++) {
		arr[i + left] = help[i];
	}
}


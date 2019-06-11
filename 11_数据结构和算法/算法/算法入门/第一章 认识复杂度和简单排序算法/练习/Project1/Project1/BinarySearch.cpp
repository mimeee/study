#include <iostream>
#include <string>

using namespace std;

void FindOneMax();
void FindLestestMaxNumber();
void getLessMin();
int _Dmain();
int _Dmain() {
	FindOneMax();
	cout << endl;
	FindLestestMaxNumber();
	cout << endl;
	getLessMin();
	return 0;
}


//在一个有序数组中，找某个数是否存在
void FindOneMax() {
	int arr[9] = { 1,3,5,7,88,99,693,1234,111111};
	int start = 0;
	int end = 8;
	int mid = 0;
	int target = 111111;
	int index = -1;
	while (start < end) {
		mid = start + ((end - start) >> 1) ;
		if (arr[mid] > target) {
			end = mid - 1;
		}
		else if (arr[mid] < target) {
			start = mid + 1;
		}
		else
		{
			index = mid;
			break;
		}
	}
	if (index == -1) {
		index = target == arr[end] ? end : index;
	}
	cout << index;
}

//在一个有序数组中，找>=某个数最左边的位置
void FindLestestMaxNumber() {
	int arr[8] = { 1,3,5,7,88,99,693,1234 };
	int start = 0;
	int end = 7;
	int mid = 0;
	int target = 2;
	int index = -1;
	while (start < end) {
		mid = start + ((end - start) >> 1);
		if (arr[mid] >= target) {
			index = mid;
			end = mid - 1;
		}
		else if (arr[mid] < target) {
			start = mid + 1;
		}
	}
	cout << index;
}
//局部最小值
void getLessMin() {
	const int size = 8;
	int arr[size] = { 5,123,52,656,85,32,5,65 };
	int index = -1;
	if (arr[0] < arr[1] || size == 1) {
		index = 0;
	}
	if (arr[size - 1] > arr[size - 2]) {
		index = size - 1;
	}

	int start = 1;
	int end = size - 2;
	int mid = -1;
	while (start < end) {
		mid = (start + end) >> 1;
		if (arr[mid] > arr[mid - 1]) {
			end = mid - 1;
		}
		else if (arr[mid] < arr[mid + 1]) {
			start = mid + 1;
		}
		else
		{
			index = mid;
		}

	}
	
	cout << index;
}
#include <iostream>
#include <string>
#include <vector>

using namespace std;

//荷兰国旗问题
template<class vector>
void FlagProblem(vector &arr, int border);

template<class vector>
void swap(vector &arr, int x, int y);
//快排
template<class vector>
void QuickSort(vector &arr);
template<class vector>
void QuickGo(vector &arr,int left,int right);

int main() {
	vector<int> arr = { 2,5,8,6,3,4,6 };
	/*FlagProblem(arr, 6);*/
	QuickSort(arr);
	for (int i = 0; i < arr.size(); i++) {
		cout << arr[i];
	}
	return 0;
}

//荷兰国旗问题
template<class vector>
void FlagProblem(vector &arr,int border) {
	int left = 0;
	int right = arr.size() - 1;
	for (int point = 0; point <= right; point++) {
		if (arr[point] < border) {
			if(point != left) swap(arr, point, left);
			left++;
		}
		else if(arr[point] > border){
			swap(arr, point--, right--);
		}
		else {
			point++;
		}
	}
	cout << left << endl;
	cout << right << endl;
}
//交换
template<class vector>
void swap(vector &arr, int x, int y) {
	arr[x] = arr[x] ^ arr[y];
	arr[y] = arr[x] ^ arr[y];
	arr[x] = arr[x] ^ arr[y];
}

//快排
template<class vector>
void QuickSort(vector &arr) {
	int left = 0;
	int right = arr.size() - 1;
	QuickGo(arr, left, right);
}
template<class vector>

void QuickGo(vector &arr, int left, int right) {
	int end = right;
	int border = arr[right];
	right = right - 1;
	int point = left;
	while (point <= right) {
		if (arr[point] < border) {
			if (point != left) swap(arr, point, left);
			point++;
			left++;
		}
		else if (arr[point] > border)
		{
			if (point != right) swap(arr, point, right);
			right--;
		}
		else {
			point++;
		}
	}
	swap(arr, right + 1, end);
	cout << "{" << left - 1 << "-" << right + 2 << "}" << endl;
}
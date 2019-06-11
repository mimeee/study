#include <iostream>
#include <string>
#include <vector>

using namespace std;
template<class T>
void swap(T &arr, int x, int y);


template<class T>
void heapInsert(T &arr, int index);

template<class T>
void heapfy(T &arr, int index, int size);



int main() {
	vector<int> arr = {1,5,6,20,10,9};
	int heapsize = arr.size() - 1;

	for (int i = heapsize; i >= 0; i--) {
		heapInsert(arr, i);	
	}
	swap(arr, 0, heapsize--);

	int fatherNumber;
	
	while (heapsize > 0) {
		fatherNumber = (heapsize - 1) >> 1;
		heapfy(arr, fatherNumber, heapsize);
		swap(arr, 0, heapsize--);
	}
		

	
	for (int i = 0; i < arr.size(); i++) {
		cout << arr[i] <<endl;
	}
	return 0;
}

template<class T>
void swap(T &arr, int x, int y) {
	arr[x] = arr[x] ^ arr[y];
	arr[y] = arr[x] ^ arr[y];
	arr[x] = arr[x] ^ arr[y];
}

template<class T>
void heapInsert(T &arr, int index) {
	while (arr[index] > arr[(index - 1) / 2]) {
		swap(arr, index, (index - 1) / 2);
		index = (index - 1) / 2;
	 }
}

template<class T>
void heapfy(T &arr, int index,int size) {
	int left;
	while (index >= 0 ) {
		left = 2 * index + 1;		
		int largest = left + 1 < size && arr[left] < arr[left + 1] ? left + 1 : left;
		if (arr[index] < arr[largest]) {
			swap(arr, index, largest);
		}
		index--;
	}
}

//最多移动k位的排序

